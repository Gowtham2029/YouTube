Debouncing:

Difference between the key stroke is slow (typing slow) : 300ms
Difference between the key stroke is fast (typing fast) : 50ms


Performance:
 iphone pro max = 14 letters

 api calls for slow = 14*1000 = 14000 Api calls
 api calls for fast = 3*1000 = 3000 Api calls  ------> performance matters.


 Debouncing with 200ms:
   if difference between the key stroke is  < 200ms - DECLINE the API call
   > 200ms - MAKE an API call
