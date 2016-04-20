using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserConsoleWebAPI.Models
{
    public class MyApps
    {
        public string groupName { get; set; }
        public List<App> apps = new List<App>();

    }
    public class App
    {

        public string Name { get; set; }
        public bool canShow { get; set; }

        public int order { get; set; }

    }
}