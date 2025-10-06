// Random message generator

// Function to randomly choose array index for each statement
function chooseRandIndex() {
    const randIndex = Math.floor(Math.random() * 5);
    return randIndex;
}

// First statement section
const options1 = ['the jungle', 'the mountains', 'the desert', 'a small town', 'the big city'];
let options1Index = chooseRandIndex();
console.log('Congratulations! Your new life assignment is ready:');
console.log(`Move to ${options1[options1Index]} for your new life`);

// Second statement section
const options2 = ['Build a house', 'Rent an apartment', 'Pitch a tent', 'Park an RV', 'Book a motel'];
let options2Index = chooseRandIndex();
console.log(`${options2[options2Index]} there, so you have somewhere to sleep`);

// Third statement section
const options3 = ['social media influencer', 'professional body builder', 'software engineer', 'boilermaker', 'hairstylist'];
let options3Index = chooseRandIndex();
console.log(`Find work as a ${options3[options3Index]}`);

// Fourth statement section
const options4 = ['pruning bonsai trees', 'at a pachinko parlor', 'organizing historical documents', 'protesting injustice', 'watching YouTube'];
let options4Index = chooseRandIndex();
console.log(`Spend your free time ${options4[options4Index]}`);
