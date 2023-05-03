import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) {
        String searchString = "";
        ArrayList<String> list = new ArrayList<>();
        BufferedReader fin = null;
        try {
            if (args.length < 1) {
                System.out.println("Потрібен параметр виклику: рядок для пошуку");
                searchString = new Scanner(System.in).nextLine();
            } else {
                searchString = args[0];
            }
            System.out.println("Введи рядки (для завершення вводу введіть пустий рядок):");
            Scanner scanner = new Scanner(System.in);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.isEmpty()) break;
                System.out.println("==Введений рядок: " + line);
                list.add(line);
            }
            Collections.sort(list);
            System.out.println("Відсортований список рядків:");
            for (String str : list) {
                System.out.println(str);
            }
            System.out.println("Результат пошуку для рядка \"" + searchString + "\":");
            for (String str : list) {
                if (str.contains(searchString)) {
                    System.out.println(str);
                }
            }
        } catch (Exception e) {
            System.out.println("Помилка: " + e);
        } finally {
            if (fin != null) {
                try {
                    fin.close(); // Закривання файлу
                } catch (IOException ex) {
                    System.out.println("Помилка закриття файлу: " + ex);
                }
            }
        }
    }
}