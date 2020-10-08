using System;
using System.Collections.Generic;

namespace averagepair
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr1 = new List<int>()
            {
                1,
                2,
                3,
                5,
                6,
                8,
                9
            };

            var arr2 = new List<int>()
            {
                -1, 3, 5, 7, 9
            };

            var arr3 = new List<int>()
            {
                2,
                5,
                7,
                11
            };

            int target = 4;

            Console.WriteLine(AveragePair(arr1, target));
            Console.WriteLine(AveragePair(arr2, target));
            Console.WriteLine(AveragePair(arr3, target));
        }

        static bool AveragePair(List<int> arr, int target)
        {
            if (arr.Count < 2) return false;
            int right = arr.Count - 1;
            int left = 0;
            int average = -1;
            do
            {
                average = (arr[right] + arr[left]);
                if (average == target * 2)
                {
                    return true;
                }
                else if (average > target * 2)
                {
                    right--;
                }
                else
                {
                    left++;
                }
            } while (right > left);

            return false;
        }
    }
}