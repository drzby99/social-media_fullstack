import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
///////////////////
////////////////////////////////////////////// Include Routes
/*
// Include npm packages
import natural from 'natural'
import stopword from 'stopword'

router.post('/:id/feedback', async function (request, response) {
    console.log(request.body)
    const { message } = request.body;
	console.log(message);

	// NLP Logic
	// Convert all data to its standard form
	/*const lexData = convertToStandard(message);
	console.log("Lexed Data: ",lexData);

	// Convert all data to lowercase
	const lowerCaseData = convertTolowerCase(message);
	console.log("LowerCase Format: ",lowerCaseData);

	// Remove non alphabets and special characters
	const onlyAlpha = removeNonAlpha(lowerCaseData);
	console.log("OnlyAlpha: ",onlyAlpha);

	// Tokenization
	const tokenConstructor = new natural.WordTokenizer();
	const tokenizedData = tokenConstructor.tokenize(onlyAlpha);
	console.log("Tokenized Data: ",tokenizedData);

	// Remove Stopwords
	const filteredData = stopword.removeStopwords(tokenizedData);
	console.log("After removing stopwords: ",filteredData);

	// Stemming
	const Sentianalyzer =
	new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
	const analysis_score = Sentianalyzer.getSentiment(message);
	console.log("Sentiment Score: ",analysis_score);

    try {
        await analysis_score.save();

        response.status(201).json({
            message: "Data received",
            sentiment_score: analysis_score
        } );
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
});
// For conversion of contractions to standard lexicon
const wordDict = {
	"aren't": "are not",
	"can't": "cannot",
	"couldn't": "could not",
	"didn't": "did not",
	"doesn't": "does not",
	"don't": "do not",
	"hadn't": "had not",
	"hasn't": "has not",
	"haven't": "have not",
	"he'd": "he would",
	"he'll": "he will",
	"he's": "he is",
	"i'd": "I would",
	"i'd": "I had",
	"i'll": "I will",
	"i'm": "I am",
	"isn't": "is not",
	"it's": "it is",
	"it'll": "it will",
	"i've": "I have",
	"let's": "let us",
	"mightn't": "might not",
	"mustn't": "must not",
	"shan't": "shall not",
	"she'd": "she would",
	"she'll": "she will",
	"she's": "she is",
	"shouldn't": "should not",
	"that's": "that is",
	"there's": "there is",
	"they'd": "they would",
	"they'll": "they will",
	"they're": "they are",
	"they've": "they have",
	"we'd": "we would",
	"we're": "we are",
	"weren't": "were not",
	"we've": "we have",
	"what'll": "what will",
	"what're": "what are",
	"what's": "what is",
	"what've": "what have",
	"where's": "where is",
	"who'd": "who would",
	"who'll": "who will",
	"who're": "who are",
	"who's": "who is",
	"who've": "who have",
	"won't": "will not",
	"wouldn't": "would not",
	"you'd": "you would",
	"you'll": "you will",
	"you're": "you are",
	"you've": "you have",
	"'re": " are",
	"wasn't": "was not",
	"we'll": " will",
	"didn't": "did not"
}

// Contractions to standard lexicons Conversion
const convertToStandard = text => {
	const data = text.split(' ');
	data.forEach((word, index) => {
		Object.keys(wordDict).forEach(key => {
			if (key === word.toLowerCase()) {
				data[index] = wordDict[key]
			};
		});
	});

	return data.join(' ');
}

// LowerCase Conversion
const convertTolowerCase = text => {
	return text.toLowerCase();
}

// Pure Alphabets extraction
const removeNonAlpha = text => {

	// This specific Regex means that replace all
	//non alphabets with empty string.
	return text.replace(/[^a-zA-Z\s]+/g, '');
}
/////////////////////////////////////////////

*/
////////////////////////////////////////////////
export default router;