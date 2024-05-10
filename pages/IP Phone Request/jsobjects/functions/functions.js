export default {
	getFilteredNumbers: () => {
		const allNumbers = getAllNumbers.data;
		let filteredNumbers = allNumbers;

		if (sel_status.selectedOptionValue.length > 0) {
			filteredNumbers = filteredNumbers.filter(t => t.status === sel_status.selectedOptionValue);
		}

		if (sel_region.selectedOptionValue.length > 0) {
			filteredNumbers = filteredNumbers.filter(t => t.region === sel_region.selectedOptionValue);
		}
		
		if (sel_batch.selectedOptionValue.length > 0) {
			filteredNumbers = filteredNumbers.filter(t => t.batch === sel_batch.selectedOptionValue);
		}

		return filteredNumbers;
	},
	getUniqueBatches() {
    const allBatchesData = getAllBatches.data; 

    const uniqueBatchesSet = new Set(allBatchesData.map(item => item.batch));
    const uniqueBatches = Array.from(uniqueBatchesSet);

    return uniqueBatches.map(batch => ({
        label: batch,
        value: batch
    })); 
   },
	 getCountByRegionAndStatus() {
     const allNumbersData = getAllNumbers.data;
     const counts = {};

     for (const item of allNumbersData) {
          const key = `${item.region}-${item.status}`; // Create a combined key 
          counts[key] = (counts[key] || 0) + 1;
     }
       // Transform into an array for easier use if needed
     const countArray = Object.entries(counts).map(([key, count]) => {
         const [region, status] = key.split('-');
            return { region, status, count };
        });

    return countArray; 
    },

}