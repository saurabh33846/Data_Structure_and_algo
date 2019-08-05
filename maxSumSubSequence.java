/*package whatever //do not write package name here */
/*
Problem: given a array of sequence , find max continuous subsequce of array

Here the logic is:
let's say maxSum[i]= maximum sum till ith element

Then: maxSum[i] = maximum( maxSum[i]+input[i], input[i])

*/
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		//code
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-- > 0){
		    int n = sc.nextInt();
		    int[] input = new int[n];
		    for(int i=0;i<n;i++){
		        input[i]= sc.nextInt();
		    }
		    //System.out.println(input[2]);
		    int[] sum = new int[n];
		    for(int i=0;i<n;i++)
		    sum[i]=0;
		    sum[0]= input[0];
		    for(int i=1;i<n;i++)
		    sum[i]= Math.max(sum[i-1]+input[i], input[i]);
		    //System.out.println(sum[1]);
		    int maxindex=0;
		    for(int j=0;j<n;j++){
		        if(sum[j]>sum[maxindex]){
		            maxindex=j;
		        }
		    }
		    //System.out.println(maxindex);
		    int temp = maxindex;
		    while(temp>=0){
		        if(sum[temp]-input[temp]<=0){
		            temp--;
		            break;
		        }
		        sum[temp]-=sum[temp];
		        temp--;
		    }
		    System.out.println(temp);
		    int start =temp+1;
		    int end = maxindex;
		    //System.out.print(start+" "+end);
		    for(int k = start;k<=end;k++){
		       System.out.print(input[k]+" ");
		    }
		    System.out.println("");
		}
	}
}