import java.util.Scanner;

public class practic4 {
    private double[] vector = null;
    public practic4(double[] vector) {
        this.vector = vector;
    }

    // Добуток вектора на число
    public double mult(int n) {
        double v = 0;
        for (int i = 0; i < vector.length; i++) {
            v += vector[i] * n;
        }
        return v;
    }

    public static double mult(practic4 a, int b) {
        return a.mult(b);
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter number:");
        int n = scan.nextInt();
        double[] a = { 1, 2, 3, 4 };
        double[] b = { 1, 1, 1, 1 };

        practic4 v1 = new practic4(a);
        practic4 v2 = new practic4(b);
        System.out.println("1*v2=" + v1.mult(n));
        System.out.println("v2*n=" + practic4.mult(v2,n));
    }
}
