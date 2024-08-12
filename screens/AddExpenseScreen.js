import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../constants';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';
import Loading from '../components/Loading';

export default function AddExpenseScreen(props) {
  let {id} = props.route.params;
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();
  const handleAddExpense = async () => {
    if (title && amount && category) {
      setLoading(true);
      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.goBack();
        setTitle('');
        setAmount('');
        setCategory('');
      }
    } else {
      Snackbar.show({
        text: 'Please enter place and country',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-between">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text
              className="text-xl font-bold text-center"
              style={colors.heading}>
              Add Expenses
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require('../assets/images/4.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text style={colors.heading} className="text-lg font-bold">
              For What ?
            </Text>
            <TextInput
              value={title}
              onChangeText={value => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text style={colors.heading} className="text-lg font-bold">
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={value => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                // Determine the background color class based on the selected category
                let bgColor = 'bg-white';
                if (cat.value === category) {
                  bgColor = 'bg-green-200';
                }
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`rounded-full px-4 p-3 mb-2 mr-2 ${bgColor}`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View>
              {loading ? (
                <Loading />
              ) : (
                <TouchableOpacity
                  style={{backgroundColor: colors.button}}
                  className="my-6 rounded-full p-3 shadow-sm mx-2"
                  onPress={handleAddExpense}>
                  <Text className="text-center text-white text-lg font-bold">
                    Add Expense
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
