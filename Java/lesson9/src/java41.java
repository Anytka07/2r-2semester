
public class java41 {
    private double[] vector = null;

    public java41(double[] vector) {
        this.vector = vector;
    }

    // Скалярний добуток векторів
    public double mult(java41 anotherVector) {
        double s = 0;
        for (int i = 0; i < vector.length; i++) {
            s += vector[i] * anotherVector.vector[i];
        }
        return s;
    }

    public static double mult(java41 a, java41 b) {
        return a.mult(b);
    }

    public static void main(String[] args) {
        double[] a = { 1, 2, 3, 4 };
        double[] b = { 1, 1, 1, 1 };
        double[] c = { 2, 2, 2, 2 };
        java41 v1 = new java41(a);
        java41 v2 = new java41(b);
        java41 v3 = new java41(c);
        System.out.println("v 1*v2=" + v1.mult(v2));
        System.out.println("v 1*v2=" + java41.mult(v1, v2));
        System.out.println("v 1*v3=" + v1.mult(v3));
    }
}
