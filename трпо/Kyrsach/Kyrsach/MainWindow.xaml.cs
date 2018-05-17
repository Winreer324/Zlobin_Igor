using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Win32;
using System.Management;
using System.Collections;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Reflection; 
namespace Kyrsach
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    { 
        //public ObservableCollection<PC> pc1 { get; set; }
        public List<PC> pc = new List<PC>();
        static public List<PC> temp = new List<PC>();
        
        public int id = 0;
        string SoftwareKey = @"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall"; 
        /// ////  

        public MainWindow()
        { 
            InitializeComponent();
            creat_PC();
            //repleais(pc);
        }
        //public void repleais(List<PC> p)
        //{
        //    foreach (PC a in pc)
        //    {
        //        temp.Add(new PC { id = a.id, programm = a.programm, copmany = a.copmany, versia = a.versia });
        //    }
        //}  
        //private void Button_Click_3(object sender, RoutedEventArgs e)
        //{ 
        //    MessageBox.Show(System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString());
        //} 
        private void Search_STR(object sender, RoutedEventArgs e)
        {
            string str = Search.Text;
            var DeleteObject = (PC)MyDatagrid.SelectedValue;
            int i = 0; 
            temp.Clear(); 
            foreach (PC a in pc) { 
                //MessageBox.Show(a.programm);   
                if (str.Contains(a.programm)) {
                    temp.Add(new PC { id = a.id, programm = a.programm, copmany = a.copmany, versia = a.versia }); 
                }  
            }
            i = 0;
            MyDatagrid.DataContext = temp;
        }

        private void Show_Programm(object sender, RoutedEventArgs e)
        {
            showPC();
        }

        //private void Get_Programm(object sender, RoutedEventArgs e)
        //{
        //    showPC();
        //} 
        public void creat_PC()
        {
            using (RegistryKey rk = Registry.LocalMachine.OpenSubKey(SoftwareKey))
            {
                foreach (string skName in rk.GetSubKeyNames())
                {
                    using (RegistryKey sk = rk.OpenSubKey(skName))
                    {
                        try
                        {
                            if (sk.GetValue("DisplayName") != null)
                            {
                                id++;
                                pc.Add(new PC { id = id, programm = sk.GetValue("DisplayName").ToString(), copmany = sk.GetValue("Publisher").ToString(), versia = sk.GetValue("DisplayVersion").ToString() });
                            }
                        }
                        catch (Exception ex)
                        {
                            // MessageBox.Show(ex.Message, "Exception");
                        }
                    }
                }
            }
            MyDatagrid.DataContext = pc; 
        }
        public void showPC()
        {
            var DeleteObject = (PC)MyDatagrid.SelectedValue;
            pc.Remove(DeleteObject); 
                temp.Remove(DeleteObject);
 
            MyDatagrid.DataContext = pc;
           
        }
    } 
}
