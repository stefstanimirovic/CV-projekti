namespace mp3Converter
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            //string file = Path.Combine(IOUtils.AssemblyDirectory, "..", "..", "..", "blues.00000.au");


                    //string mp3file = "converted.mp3";
                    //Console.WriteLine("Converting {0}", file);
                    //FFMpeg.Convert2Mp3(file, mp3file);
                    //if (!File.Exists(mp3file))
                    //{
                    //    Console.WriteLine("Failed to convert to {0}", mp3file);
                    //}

            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            ApplicationConfiguration.Initialize();
            Application.Run(new Form1());
        }
    }
}