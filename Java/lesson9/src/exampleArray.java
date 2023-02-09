public class exampleArray {
    public static void main(String[] args) {
        int size1 = 5;
        int size2 = 5;
        int [][] array = new int [size1][size2];
        for (int i=0;i<size1;i++)
        {
            for(int j=0;j<size2;j++)
            {
                array[i][j] = i * j + 2;
            }
        }
        for (int i=0;i<size1;i++)
        {
            for(int j=0;j<size2;j++)
            {
                System.out.print(" " + array[i][j]);
            }
            System.out.print("\n");
        }
    }
}
