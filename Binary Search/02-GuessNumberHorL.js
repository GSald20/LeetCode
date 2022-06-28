/* 
We are playing the Guess Game. 
The game is as follows:

I pick a number from 1 to n. You have to guess
 which number I picked.

Every time you guess wrong, I will tell you whether 
the number I picked is higher or lower than your guess.
*/

function guessNumber(n){
    let low = 1;
    let high = n;

    while(low <= high){
        const mid = Math.floor((low + high) / 2);
        const guessHint = guess(mid);
        if (guessHint === 0) return mid;
        if(guessHint === 1) {
            low = mid +  1;
        } else {
            high = mid - 1;
        }
    }
}