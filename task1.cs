using System;
namespace ConsoleApp1
{
  internal class Program
  {
    static void Main(string[] args)
    {
      int temperatur=15;
      if (temperatur<15){
        Console.WriteLine("weather is cold");}
      else if(temperatur>15){
        Console.WriteLine("weather is hot");}  
    }
  }