const express = require('express');
const path = require('path');
const db = require('./db/connection');
const bcrypt = require('bcryptjs'); // პაროლის ჰეშირებისთვის
const cors = require('cors');       // CORS-ის მხარდაჭერისთვის

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// სტატიკური ფაილების გადატანა root დირექტორიიდან
app.use(express.static(path.join(__dirname)));


// ✅API მარშრუტი როგორც ძიებისთვის, ასევე კატეგორიის ფილტრაციისთვის
app.get('/api/products', (req, res) => {
  const category = req.query.category?.trim() || '';
  const search = req.query.q?.trim() || '';

  let sql = 'SELECT * FROM products';
  const values = [];

  // კატეგორიის ფილტრი
  if (category) {
    sql += ' WHERE category = ?';
    values.push(category);
  }

  // ძიების ფილტრი
  if (search) {
    if (category) {
      sql += ' AND (name LIKE ? OR description LIKE ?)';
    } else {
      sql += ' WHERE name LIKE ? OR description LIKE ?';
    }
    values.push(`%${search}%`, `%${search}%`);
  }

  console.log('🟢 SQL:', sql, values); // კონსოლში გამართვისთვის

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});


// =============================
// 👤 ახალი ავტორიზაციისთვის
// =============================

// რეგისტრაცია
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ success: false, message: 'All fields required' });

  try {
    // შეამოწმეთ, არსებობს თუ არა უკვე მომხმარებელი იმავე ელ.ფოსტით
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) return res.status(500).json({ success: false, message: 'DB error' });

      if (results.length > 0) {
        return res.json({ success: false, message: 'Email already registered' });
      }

      // ჰეშირება პაროლის და ახალი მომხმარებელის შემოწმება DB-ში
      const hashed = await bcrypt.hash(password, 10);
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashed],
        (err) => {
          if (err) {
            console.error('Signup error:', err);
            return res.status(500).json({ success: false, message: 'Signup failed' });
          }
          res.json({ success: true, message: 'Signup successful!' });
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// შესვლა
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, message: 'All fields required' });

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) return res.status(500).json({ success: false, message: 'DB error' });

      if (results.length === 0)
        return res.json({ success: false, message: 'User not found' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.json({ success: false, message: 'Incorrect password' });
      }

      res.json({
        success: true,
        message: 'Login successful!',
        username: user.username
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// =============================
// 🚀 სერვერის დაწყება
// =============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));




