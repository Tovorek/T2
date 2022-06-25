try {
    
    callAPI();
} catch (error) {
   
    throw new Error(error); 			
} finally {
    console.log('I will execute no matter what happened in try or catch');
