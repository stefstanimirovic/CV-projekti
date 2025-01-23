using System.Text;

namespace frajler
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            button1.Click += new System.EventHandler(button1_Click);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult d = folderBrowserDialog1.ShowDialog();
            if (d == DialogResult.OK)
            {
                toolStripStatusLabel1.Text = folderBrowserDialog1.SelectedPath;
                string[] dd = System.IO.Directory.GetDirectories(folderBrowserDialog1.SelectedPath);
                foreach (string dd2 in dd)
                {
                    string[] ii = dd2.Split("\\");
                    string ime = ii[ii.Length - 1];
                    string[] f = System.IO.Directory.GetFiles(dd2);
                    listBox1.Items.Clear();
                    foreach (string f2 in f)
                    {
                        listBox1.Items.Add(f2);
                    }
                    foreach (string f2 in f)
                    {
                        System.IO.FileInfo fff = new System.IO.FileInfo(f2);
                        string f3 = f2.Replace(fff.Name.Substring(0, fff.Name.Length - fff.Extension.Length), ime);
                        if (!System.IO.File.Exists(f3)) { System.IO.File.Move(f2, f3); }
                    };
                }
            }
        }
    }
}
