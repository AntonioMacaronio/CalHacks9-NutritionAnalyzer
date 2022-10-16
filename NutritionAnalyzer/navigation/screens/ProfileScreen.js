import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

import { collection, doc, getDocs, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from '../../firebase/config';


const blacklistCol = collection(db, "blacklisted-ingredients");
const blacklistRef = doc(blacklistCol, "blacklists");

/*async function getCities() {
    const blacklistCol = collection(db, 'cities');
    const blacklistSnapshot = await getDocs(blacklistCol);
    const blacklist = blacklistSnapshot.docs.map(doc => doc.data());
    return blacklist;
  }

async function update(ingredient) {
    const blacklistRef = doc(db, "blacklisted-ingredients", "blacklists");
    await updateDoc(blacklistRef, {
        blacklist: arrayUnion(ingredient)
    });
}*/

export default function ProfileScreen(navigation) {
    const [ingredients, setIngredients] = useState([]);
    const [ingred, setIngred] = useState("");

    async function getCities() {
        blacklistRef = db.collection('blacklisted-ingredients').doc('blacklists');
        const doc = await cityRef.get();
        console.log(doc.data());
      }
    
    async function update() {
        console.log(ingred)
        const blacklistRef = doc(db, "blacklisted-ingredients", "blacklists");
        await updateDoc(blacklistRef, {
            blacklist: arrayUnion(ingred)
        });
        //const bl = blacklistRef.get().blacklist;
        getCities()
        //console.log(bl)
        //setIngredients(bl);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justfiyContent: 'center' }}>
            <Text
                onPress = {() => alert('This is your "Profile" screen')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            <Text>Enter an ingredient to add.</Text>
            <TextInput
                placeholder="ingredient"
                autoComplete="off"
                value={ingred}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText = { (val) => setIngred(val) }
            />
            <Text>Current Blacklist: {ingredients}</Text>
            <Text>Current Ingredient: {ingred}</Text>
            <Button
                title="Add Ingredient"
                onPress={update}
                // disabled={loadingSignInWithEmail}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        marginVertical: 5,
        marginLeft: "auto",
        marginRight: "auto",
        width: 200,
        padding: 15,
        borderColor: 'gray', 
        borderWidth: 1,
      },
})