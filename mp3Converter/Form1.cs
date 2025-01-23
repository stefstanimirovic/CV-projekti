using System;
using System.Diagnostics;
using System.Diagnostics.Eventing.Reader;
using System.IO;
using System.Reflection.Metadata.Ecma335;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.TaskbarClock;


namespace mp3Converter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult dialog = folderBrowserDialog1.ShowDialog();
            if (dialog == DialogResult.OK)
            {
                toolStripStatusLabel1.Text = folderBrowserDialog1.SelectedPath;
                var files = System.IO.Directory.GetFiles(folderBrowserDialog1.SelectedPath, @"*.*", SearchOption.AllDirectories)
                    .Where(s => s.EndsWith(".DNG") || s.EndsWith(".PNG") || s.EndsWith(".HEIC"));

                //.Where(s => s.EndsWith(".wav") || s.EndsWith(".flac"));
                //MessageBox.Show(files.Count().ToString());
                //string[] direktorije = System.IO.Directory.GetDirectories(folderBrowserDialog1.SelectedPath,@"*.*",SearchOption.AllDirectories);
                listBox1.Items.Clear();
                // string mp3 = ".mp3";
                string jpeg = ".jpeg";

                foreach (string file in files)
                {
                    listBox1.Items.Add(file);
                    string fileExt = System.IO.Path.GetExtension(file);
                    System.IO.FileInfo fileInfo = new System.IO.FileInfo(file); 
                    var f2 = file.Replace(fileInfo.Extension, jpeg); //mp3
                        if (!System.IO.File.Exists(f2)) { System.IO.File.Move(file, f2); }     
                    listBox1.Items.Add(f2);

                   /* Process p= new Process();
                    p.StartInfo.FileName = AppDomain.CurrentDomain.BaseDirectory + @"\ffmpeg.exe";
                    //p.StartInfo.WorkingDirectory = @"C:\Users\stefans\Desktop\ffmpeg-2024-06-30-git-b818dff8d8-essentials_build\bin";
                    // p.StartInfo.UseShellExecute = true;
                    //p.StartInfo.Arguments = string.Format(" -i {0} -vn -f mp3 -b:a 192k output  {1}", file,f2);
                   // p.StartInfo.Arguments = string.Format("-i {0} -codec:a libmp3lame -b:a 2 {1}", file, f2);
                    p.StartInfo.Arguments = string.Format("-i \"{0}\" -ab 320k -map_metadata 0 -id3v2_version 3 \"{1}\"", file, f2);
                    p.StartInfo.WindowStyle = ProcessWindowStyle.Maximized; //Hidden bolje
                    //MessageBox.Show(file + " " + f2);
                    p.Start();
                    p.WaitForExit();*/

                }






                //if (!(fileExt == ".mp3"))
                //{
                //    System.IO.File.Move(file, Path.ChangeExtension(file, ".mp3"));
                //}


                //foreach (string d in direktorije)
                //{
                //    string[] fajlovi = System.IO.Directory.GetFiles(d);
                //    listBox1.Items.Clear();
                //    foreach (string f in fajlovi)
                //    {
                //        listBox1.Items.Add(f);
                //    }
                //    foreach (string f in fajlovi)
                //    {
                //        string fileExt = System.IO.Path.GetExtension(f);
                //        if (fileExt == ".wav" || fileExt == ".flac")
                //        {
                //            listBox1.Items.Add(f);
            }
        }
    }
}
