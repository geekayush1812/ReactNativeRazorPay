import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

function Home() {
  const beginPayment = () => {
    const options = {
      description: 'Credits towards consultation', //description to be shown on payment screen
      image: 'https://i.imgur.com/3g7nmJC.png', // logo of your company
      currency: 'INR',
      key: 'rzp_test_KJU42LeAxuqYua', // API key
      amount: '500', // in paise 500=500/100 == 5 rupees
      name: 'foo', //name of payer
      // order_id: 'order_DslnoIgkIDL8Zt',
      prefill: {
        email: 'void@razorpay.com', //email of payer
        contact: '9191919191', // contact of payer
        name: 'Razorpay Software',
      },
      theme: {color: '#4b0082'},
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        //we can save data to our server
        console.log(`Success:`, data);
      })
      .catch((error) => {
        console.log(`Error:`, error);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={beginPayment}
        style={{backgroundColor: '#4b0082', padding: '4%', borderRadius: 10}}>
        <Text style={{color: '#fafafa'}}>Pay with RazorPay</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
