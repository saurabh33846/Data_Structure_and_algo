/**
    Given a string found the max length palindromic substring of that string
    Method used: Calculate all even length palindromic substring.
                 Calculate all odd length palinndromic substring.
                 Retrun max of them
 */

import java.util.*;
import java.lang.*;
import java.io.*;

public class GFG {
    static int[] checkOddLengthPalLen(char[] ch){
        int maxLen = 0;
        int[] index = new int[3];
        if(ch.length >0){
            int defaultLen = 1;
            for(int i=0;i<ch.length;i++){
                int tempLen = 1;
                int left =i-1;
                int right= i+1;
                while(left>=0 && right<ch.length) {
                    if(ch[left]== ch[right]) {
                        tempLen+=2;
                        left--;
                        right++;
                    } else {
                        break;
                    }
                }
                if(tempLen > maxLen) {
                    index[0] = left+1;
                    index[1] = right-1;
                    maxLen = tempLen;
                    index[2] = maxLen;
                }
            }
            return index;
        }
        return index;
    }
    static int[] checkEvenLengthPalLen(char[] ch){
        int[] index = new int[3];
        if(ch.length >1){
            int maxLen = 0;
            int defaultLen = 0;
            int cen1 = 0;
            int cen2 = 1;
            while(cen2<ch.length){
                int curLen = 0;
                if(ch[cen1] == ch[cen2]){
                    curLen = 2;
                    int left = cen1-1;
                    int right = cen2+1;
                    while(left >= 0 && right <ch.length){
                        if(ch[left] == ch[right]){
                            curLen= curLen+2;
                            left--;
                            right++;
                        } else {
                            break;
                        }
                    }
                    if(curLen > maxLen){
                        index[0] = left+1;
                        index[1] = right-1;
                        maxLen = curLen;
                        index[2] = maxLen;
                    }
                }

                cen2++;
                cen1++;
            }
            return index;
        }
        return index;
    }
	public static void main (String[] args) {
	    Scanner sc = new Scanner(System.in);
	    int T = sc.nextInt();
	    while(T-- > 0){
	        String s = sc.next();
	        char[] ch = s.toCharArray();
	        int oddLengthPalLen[] = checkOddLengthPalLen(ch);
	        int evenLengthPalLen[] = checkEvenLengthPalLen(ch);
	        int[] maxlen=  oddLengthPalLen[2] > evenLengthPalLen[2] ? oddLengthPalLen:evenLengthPalLen;
	        System.out.println(s.substring(maxlen[0], maxlen[1]+1));
	    }
		//code
	}
}