import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from './firebase';  // Import db instance from firebase.js

// Function to add a new user to Firestore
export async function addUser(userData) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      loginName: userData.loginName,
      loginPassword: userData.loginPassword,
      avatarShape: userData.avatarShape,
      avatarColor: userData.avatarColor,
      xp: userData.xp,
      streak: userData.streak,
      coins: userData.coins
    });
    console.log("User added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

// Function to add health data for a specific hour
export async function addHealthData(healthData) {
  try {
    const docRef = await addDoc(collection(db, "healthData"), {
      timestamp: serverTimestamp(),  // Use current time or modify for custom time
      userId: healthData.userId,
      activeMinutes: healthData.activeMinutes,
      caloriesBurned: healthData.caloriesBurned,
      heartbeatAverage: healthData.heartbeatAverage,
      steps: healthData.steps
    });
    console.log("Health data added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding health data: ", e);
  }
}
