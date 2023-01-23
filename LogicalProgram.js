// If eles
//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

//  var readlineSync = require('readline-sync');
//     let Check = readlineSync.question("Enter option1.Find min and max of 3 degit random number\n2 da of month between 20-03-22-and 20-06-22\n3.Find leap year\n4.Flipcoin")
// switch(Check)
// {
//     case 1:
//         RandomNum () 
//         break;
// }
function RandomNum () 
{
    let minimum=1000;
    let maximum=0;
for(i=1;i<=5;i++)
{
    let e =Math.floor(Math.random() * 899)+100;
    console.log([e]);
    if(e>maximum)
    {
        maximum=e;
    }
    if(e<minimum)
    {
        minimum=e;
    }
}      
console.log("minmum " +minimum);
console.log("maximum " +maximum);
}



// 2. Write a program that takes day and month from the command line and prints true if

// day of month is between March 20 and June 20, false otherwise.

function DaysInBetweeen()
{
    var readlineSync = require('readline-sync');
    let date = new Date;
    let date1 =new Date;
    let date2= new Date;
    date1="20-03";
    date2="20-06";
    date = readlineSync.question("Enter date")
    console.log(date);
    console.log(date1)
    console.log(date2)
    if(date>=date1 && date<date2)
    {
        console.log("true");
    }
    else{
        console.log("false")
    }
}
// DaysInBetweeen()

// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.
function leapyear()
{
    var readlineSync = require('readline-sync');
    let year = readlineSync.question("Enter Year")
if(year%4)
{
    console.log("Not a leap year")
}
else
{
    console.log(year+" "+"This is Leap year")
}
}
// leapyear()

// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
function filpcoin()
{
    let coin =Math.floor(Math.random() * 2);
    if (coin==1)
    {
        console.log("Heads")
    }
    else
    {
        console.log("Tails")
    }

}
// filpcoin()

// ********************************************************************************************************************
// Selection Practice Problems with if else if and else
// 1. Read a single digit number and write the number in word 

class logical{
    single()
    {
        
        var readlineSync = require('readline-sync');
       let num = readlineSync.question("Enter Single Digit number : ")
       if(num==0)
       {
        console.log("Zero")
       }
       else if(num==1)
       {
        console.log("One")
       }
       else if(num==2)
       {
        console.log("Two")
       }
       else if(num==3)
       {
        console.log("Three")
       }
       else if(num==4)
       {
        console.log("Four")
       }
       else if(num==5)
       {
        console.log("Five")
       }
       else if(num==6)
       {
        console.log("Six")
       }
       else if(num==7)
       {
        console.log("Saven")
       }
       else if(num==8)
       {
        console.log("Eight")
       }
       else if(num==9)
       {
        console.log("Nine")
       }
       else
       {
        console.log("Enter single digit number")
       }
       
        
    }
    WeekDays()
    {
        
            var readlineSync = require('readline-sync');
            let num = readlineSync.question("Enter number from 1-7 to find week days : ")
            if (num==1)
            {
                console.log("monday")

            }
            else if(num==2)
            {
             console.log("Tuesday")
            }
            else if(num==3)
            {
             console.log("Wednesday")
            }
            else if(num==4)
            {
             console.log("Thursday")
            }
            else if(num==5)
            {
             console.log("Friday")
            }
            else if(num==6)
            {
             console.log("Saturday")
            }
            else if(num==7)
            {
             console.log("Sunday")
            }
            else
            {
                console.log("Enter valid option")
            }

    }
    

}

var number1 = new logical();
number1.single();
number1.WeekDays();



