using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserConsoleWebAPI.Models;
using System.Web.Http.Cors;
//using System.Web.Script.Serialization;

namespace UserConsoleWebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:49813", headers: "*", methods: "*")]
    public class UserConsoleController : ApiController
    {
        [HttpGet]
        
        public List<MyApps> GetMyApps()
        {
            List<MyApps> appList = new List<MyApps>();

            getapps(ref appList);
  //          var json = new JavaScriptSerializer().Serialize(appList);
            return appList;
        }

        [HttpPost]
        public void PostApps(List<MyApps> data)
        {
            if (data.Count == 0)
            { }
        }

        private void getapps(ref List<MyApps> appList)
        {
            appList = new List<MyApps>()
             {
                 new MyApps() {groupName= "IT",
                               apps = new List<App>()
                               {
                                   new App() {Name = "App1",canShow=true,order=1 },
                                   new App() {Name = "App2",canShow=true,order=5 },
                                   new App() {Name = "App3",canShow=true,order=2 }
                               } },
                 new MyApps() {groupName= "Human Resources",
                               apps = new List<App>()
                               {
                                   new App() {Name = "App4",canShow=true,order=6 },
                                   new App() {Name = "App5",canShow=true,order=4 },
                                   new App() {Name = "App6",canShow=true,order=3 }
                               } }
             };
            
        }
    }
}
