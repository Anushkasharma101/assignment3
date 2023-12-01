const fs = require('fs').promises;

// Function to read data from a local JSON file
async function readFoodDataFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    throw error;
  }
}

// Function to list all food items with the category "vegetables"
  function listVegetables(data) {
    return listFoodItemsByCategory(data, 'vegetable');
}

  function listFruits(data) {
    return listFoodItemsByCategory(data, 'Fruit');
  }

  function listProtein(data) {
    return listFoodItemsByCategory(data, 'Protein');
}  
   
  function listNuts(data) {
    return listFoodItemsByCategory(data, 'Nuts');
}  

  function listGrains(data) {
    return listFoodItemsByCategory(data, 'Grains');
}  

  function listDairy(data) {
    return listFoodItemsByCategory(data, 'Dairy');
}  

  function listFoodItemsAboveCalorie(data, calorieThreshold) {
    return data.filter(food => food.calorie > calorieThreshold);
}

  function listFoodItemsBelowCalorie(data, calorieThreshold) {
    return data.filter(food => food.calorie < calorieThreshold);
} 

  function listFoodItemsByHighestProtein(data) {
    return data.slice().sort((a, b) => b.proteins - a.proteins);
}

  function listFoodItemsByLowestCarb(data) {
    return data.slice().sort((a, b) => a.cab - b.cab);
}




// Function to list food items with a specific category
function listFoodItemsByCategory(data, category) {
  return data.filter(item => item.category.toLowerCase() === category.toLowerCase());
}

// Example usage with a local file path
const localFilePath = 'food.json';

(async () => {
  try {
    const foodData = await readFoodDataFromFile(localFilePath);

    // Call the function for vegetables and log the result
    console.log('All Food Items:', foodData);
    console.log('Vegetables:', listVegetables(foodData));
    console.log('Fruits:', listFruits(foodData));
    console.log('Proteins:', listProtein(foodData));
    console.log('Nuts:', listNuts(foodData));
    console.log('Grains:', listGrains(foodData));
    console.log('Dairy:', listDairy(foodData));
    console.log('Items with Calorie Above 100:', listFoodItemsAboveCalorie(foodData, 100));
    console.log('Items with Calorie Below 100:', listFoodItemsBelowCalorie(foodData, 100));
    console.log('Items with Highest Protein to Lowest:', listFoodItemsByHighestProtein(foodData));
    console.log('Items with Lowest Carb to Highest:', listFoodItemsByLowestCarb(foodData));


  } catch (error) {
    console.error('Error:', error.message);
  }
})();
