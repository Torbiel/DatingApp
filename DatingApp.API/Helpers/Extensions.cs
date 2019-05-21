using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse reponse, string message)
        {
            reponse.Headers.Add("Application-Error", message);
            //these headers allow message to be displayed
            reponse.Headers.Add("Access-Control-Expose-Headers", "Application-Error"); //cause header
            reponse.Headers.Add("Access-Control-Allow-Origin", "*"); // * - allow any header
        }
    }
}