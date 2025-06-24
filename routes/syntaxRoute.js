const express = require('express');
const router = express.Router();

const {
  HTMLDocumentation,
  CourseContent,
  JavaScript,
  React,
  NodeJS,
  ExpressJs
} = require('../schemas');

// Get only HTML data
router.get('/html', async (req, res) => {
  try {
    const data = await HTMLDocumentation.findOne();
    res.status(200).json(data?.HTML || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch HTML data' });
  }
});

// Get only CSS data
router.get('/css', async (req, res) => {
  try {
    const data = await CourseContent.findOne();
    res.status(200).json(data?.CSS || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch CSS data' });
  }
});

// Get only JavaScript data
router.get('/javascript', async (req, res) => {
  try {
    const data = await JavaScript.findOne();
    res.status(200).json(data?.JAVASCRIPT || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch JavaScript data' });
  }
});

// Get only React data
router.get('/react', async (req, res) => {
  try {
    const data = await React.findOne();
    res.status(200).json(data || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch React data' });
  }
});

// Get only Node.js data
router.get('/node', async (req, res) => {
  try {
    const data = await NodeJS.findOne();
    res.status(200).json(data || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Node.js data' });
  }
});

// Get only Express.js data
router.get('/express', async (req, res) => {
  try {
    const data = await ExpressJs.findOne();
    res.status(200).json(data || {});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Express.js data' });
  }
});
// router.get('/java', async (req, res) => {
//   try {
//     const data = await Java.findOne();
//     res.status(200).json(data || {});
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch Express.js data' });
//   }
// });

module.exports = router;
