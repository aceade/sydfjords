import * as toxicity from '@tensorflow-models/toxicity';

const threshold = 0.9;
const toxicityLabels: string[] = [];

let model: toxicity.ToxicityClassifier;

toxicity.load(threshold, toxicityLabels).then(loadedModel => {
    model = loadedModel;
    // "prewarm" the model
    model.classify("Model loaded");
});

export const makePrediction = async (text: string) => {
    return await model.classify(text);
}