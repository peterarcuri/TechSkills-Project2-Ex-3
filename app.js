
// ================================
// =========== STEP 1 =============
// ================================

const randomDecimal = Math.random();
const range = 33-3 +1;
const randomInRange = randomDecimal * range;

const randomInt = Math.floor(randomInRange);

const shiftValue = randomInt + 3;


// ================================
// =========== STEP 2 =============
// ================================

const range = 33 - 3 + 1;

// ================================
// ========= QUESTION 1 ===========
// ================================

// Adding 1 to the range makes sure we cover both endpoints of the range (given us 31 possibilities)

// ================================
// =========== STEP 3 =============
// ================================

const randomInRange = randomDecimal * range;

// ================================
// ========= QUESTION 2 ===========
// ================================

// The randomDecimal variable is assigned Math.floor() which is a function
// given us a random decimal number between 0 and 1(excluding). We multiply that
// by the range (which is 31) given us all those random decimals between 0 and the full range.


// ================================
// =========== STEP 4 =============
// ================================

const randomInt = Math.floor(randomInRange);

// ================================
// ========= QUESTION 3 ===========
// ================================

// Since Math.floor() rounds down to the nearest whole integer, it keeps it within
// the desired range. If we rounded instead (Math.round()), then the outcome would 
// exceed the desired range.

// ================================
// =========== STEP 5 =============
// ================================

const shiftValue = randomInt + 3;

// ================================
// ========= QUESTION 4 ===========
// ================================

// Since the random integer is 0 to range (33 - 3 = 30) adding +3 
// shifts this entire range upward starting at 3 (3-33)



























