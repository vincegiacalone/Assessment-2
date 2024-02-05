///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const calculateTotal = (cart) => {
    const total = cart.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);
    return total;
};

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * (tax / 100);
    const finalPrice = cartTotal - couponValue + taxAmount;
    return finalPrice;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

firstName: This represents the first name of the customer. It will be a string data type because names are (normally) alphanumeric characters.

lastName: This represents the last name of the customer. Like the firstName property, it should also be a string data type.

email: This will store the email address of the customer. It will be a string data type, as email addresses are sequences of alphanumeric characters and symbols.

address: This property contains the customer's address for delivery. It will be an object with sub-properties like the street, city, state, and zipCode. The address property itself can be an object data type to organize related information in a structured manner.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    }
};
