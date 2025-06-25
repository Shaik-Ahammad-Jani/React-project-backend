const express = require('express');
const router = express.Router();

const {
  HTMLDocumentation,
  CourseContent,
  JavaScript,
  React,
  NodeJS,
  ExpressJs,
  syntax // Add syntax model import here
} = require('../schemas');

// 🔹 HTML Route
router.get('/html', async (req, res) => {
  try {
    const doc = await HTMLDocumentation.findOne({HTML:{$exists:true}});
    console.log("Fetched HTML from MongoDB:", doc);
    if (!doc || !doc.HTML) {
      return res.status(404).json({ error: "HTML content not found" });
    }
    res.status(200).json(doc.HTML);
  } catch (err) {
    console.error("Error fetching HTML:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔹 CSS Route
router.get('/css', async (req, res) => {
  try {
    const doc = await CourseContent.findOne({ CSS: { $exists: true } });
    console.log("Fetched CSS from MongoDB:", doc);
    if (!doc || !doc.CSS) {
      return res.status(404).json({ error: "CSS content not found" });
    }
    res.status(200).json(doc.CSS);
  } catch (err) {
    console.error("Error fetching CSS:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/debug-syntax', async (req, res) => {
  try {
    const data = await JavaScript.find();
    console.log("🧪 All syntax documents (via JavaScript model):", data);
    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Error in debug-syntax route:", err);
    res.status(500).json({ error: "Debug error" });
  }
});


// 🔹 JavaScript Route
router.get('/javascript', async (req, res) => {
  try {
    // ✅ Ensure we filter the correct doc
    const doc = await JavaScript.findOne({ JAVASCRIPT: { $exists: true } });

    console.log("✅ JAVASCRIPT doc:", doc);

    if (!doc || !doc.JAVASCRIPT) {
      return res.status(404).json({ error: "JavaScript content not found" });
    }

    res.status(200).json(doc.JAVASCRIPT); // ✅ only send the JS part
  } catch (err) {
    console.error("❌ Error in /api/javascript:", err);
    res.status(500).json({ error: "Server error" });
  }
});




// 🔹 React Route
router.get('/react', async (req, res) => {
  try {
    const doc = await React.findOne({ReactJS:{$exists:true}});
    console.log("Fetched React from MongoDB:", doc);
    if (!doc) {
      return res.status(404).json({ error: "React content not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error fetching React:", err);
    res.status(500).json({ error: 'Server error' });
  } 
});

// 🔹 Node.js Route
router.get('/node', async (req, res) => {
  try {
    const doc = await NodeJS.findOne({NodeJS:{$exits:true}});
    console.log("Fetched Node.js from MongoDB:", doc);
    if (!doc) {
      return res.status(404).json({ error: "Node.js content not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error fetching Node.js:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🔹 Express.js Route
router.get('/express', async (req, res) => {
  try {
    const doc = await ExpressJs.findOne({ExpressJS:{$exists:true}});
    console.log("Fetched Express.js from MongoDB:", doc);
    if (!doc) {
      return res.status(404).json({ error: "Express.js content not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error fetching Express.js:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
