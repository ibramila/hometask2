using System;
namespace ConsoleApp1
{
  internal class Program
  {
    static void Main(string[] args)
    {
      int number1 = 5;
      int number2 = 6;
      int number3 = 7;
      
      if (number1<=number2 && number1<=number3){
        Console.WriteLine(number1);
        }
        else if(number2<=number1 && number2<=number3){
            Console.WriteLine(number2);   
             }
        else{
             Console.WriteLine(number3);
             }
    }
  }