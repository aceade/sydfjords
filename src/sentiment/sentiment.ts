import {sentiment} from 'ml5';

const model = sentiment("movieReviews", () => {
    console.info("ml5 loaded");
    // "warm up" the sentiment analysis so that subsequent 
    model.predict("ml5 loaded correctly");
});

export const makePrediction = async (text: string) => {
    return model.predict(text);
}