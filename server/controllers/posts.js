import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

import natural from 'natural'
import stopword from 'stopword'



const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    console.log(typeof message)
    // NLP Logic
	// Convert all data to its standard form
	const lexData = convertToStandard(message);
	console.log("Lexed Data: ",lexData);

	// Convert all data to lowercase
	const lowerCaseData = convertTolowerCase(lexData);
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
    console.log(typeof filteredData)
	// Stemming
	const Sentianalyzer =
	new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
	const analysis_score = Sentianalyzer.getSentiment(filteredData);
	console.log("Sentiment Score: ",analysis_score);

    //////////////////////////////////


    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags, sentiment: analysis_score })


    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }


    /////////////////////////////////
    /*const { title, message, selectedFile, creator, tags } = req.body;
    getTone(message)
            .then(tone => {
                console.log(tone)
            });

        // Could asyncronously send message and make ML prediction, 
        // then tag along predicted tone using UUID mapping of message

        updateSentiment(message.body);
    
        // Get tone of message
    let getTone = async (input_text) => {
        let tone = '';

        // Get tone using IBM Cloud Tone Analyzer API  
        const toneParams = {
            toneInput: { 'text': input_text },
            contentType: 'application/json',
        };

        await toneAnalyzer.tone(toneParams)
            .then(toneAnalysis => {
                console.log(JSON.stringify(toneAnalysis, null, 2));
                tone = toneAnalysis.result.document_tone.tones[0].tone_name || '';
            })
            .catch(err => {
                console.log('error:', err);
            });
        return tone;
    }
    let updateSentiment = async (input_text) => {
        message_count++;
        predict(input_text)
            .then(sentiment => {
                total_sentiment_score += sentiment;
                io.sockets.emit('get sentiment', total_sentiment_score / message_count);
            })
            .catch(err => {
                console.log('error:', err);
            });
    }

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    /////////////////////////////////RISKY ZONE
    */
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const likedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(likedPost);
}

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


export default router;