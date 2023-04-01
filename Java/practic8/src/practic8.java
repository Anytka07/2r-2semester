import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

import javax.swing.*;

import java.awt.datatransfer.StringSelection;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;

public class practic8 extends JFrame {
    JPanel panelFirst = new JPanel();
    JPanel panelSecond = new JPanel();
    JPanel panelInput = new JPanel();
    JPanel panelOutput = new JPanel();
    JPanel panelButton = new JPanel();

    JLabel lblInfo = new JLabel("");
    JLabel lbl = new JLabel("Поле для вводу");
    JLabel lbl2 = new JLabel("Поле для виводу");
    JTextField fld = new JTextField(20);
    JTextField fld2 = new JTextField(20);
    JButton btn = new JButton("Скопіювати");
    JButton btndruc = new JButton("Надукувати");

    ArrayList<String> list1 = new ArrayList<String>();

    practic8() {
        super("Слухачі полів та кнопок");
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
        }
        setSize(400, 200);
        Container c = getContentPane();
        c.add(panelFirst, BorderLayout.CENTER);
        c.add(panelSecond, BorderLayout.SOUTH);

        panelFirst.add(panelInput, BorderLayout.NORTH);
        panelFirst.add(panelOutput, BorderLayout.SOUTH);

        panelInput.add(lbl, BorderLayout.WEST);
        panelInput.add(fld, BorderLayout.EAST);

        panelOutput.add(lbl2, BorderLayout.WEST);
        panelOutput.add(fld2, BorderLayout.EAST);

        panelButton.add(btn, BorderLayout.WEST);
        panelButton.add(btndruc, BorderLayout.EAST);

        btn.setPreferredSize(new Dimension(btn.getPreferredSize().width + 30, btn.getPreferredSize().height + 10));
        btndruc.setPreferredSize(
                new Dimension(btndruc.getPreferredSize().width + 30, btndruc.getPreferredSize().height + 10));

        panelSecond.add(panelButton, BorderLayout.CENTER);
        panelSecond.add(lblInfo, BorderLayout.SOUTH);

        panelSecond.setPreferredSize(new Dimension(panelSecond.getWidth(), panelButton.getPreferredSize().height + 40));

        fld.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                var str = fld.getText();
                if (str.length() > 0) {
                    fld2.setText("..." + str + "...");
                    list1.add(str);
                } else
                    fld2.setText("");
                lblInfo.setText("Скопійовано через Enter");
            }
        });

        btn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                var str = fld.getText();
                if (str.length() > 0) {
                    fld2.setText("*" + str + "*");
                    list1.add(str);
                    // copy to clipboard
                    StringSelection stringSelection = new StringSelection(fld2.getText());
                    Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
                    clipboard.setContents(stringSelection, null);
                    // copy to clipboard
                } else
                    fld2.setText("");
                lblInfo.setText("Скопійовано в буфер-обміну");
            }
        });

        btndruc.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.out.println("Початок :");
                for (String x : list1) {
                    System.out.println(x);
                }
                lblInfo.setText("Виведено в System.out");
            }
        });

        WindowListener wndCloser = new WindowAdapter()
        {
            public void windowClosing(WindowEvent e)
            {
                System.exit(0);
            }
        };
        addWindowListener(wndCloser);
        setVisible(true);
    }

    public static void main(String[] args)
    {
        new practic8();
    }
}