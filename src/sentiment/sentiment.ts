import * as toxicity from '@tensorflow-models/toxicity';

const threshold = 0.9;
const toxicityLabels: string[] = ["toxicity", "threat", "sexual_explicit", "severe_toxicity"];

let model: toxicity.ToxicityClassifier;
let modelLoaded = false;

toxicity.load(threshold, toxicityLabels).then(async(loadedModel) => {
    model = loadedModel;
    // "prewarm" the model
    await model.classify("Model loaded").then(() => {
        console.info("Model loaded");
        modelLoaded = true;
    })
});

export const makePrediction = async (text: string) => {
    console.info(`Analysing text of ${text.length} characters`);
    return modelLoaded ? await model.classify(text) : {};
}
