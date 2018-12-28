using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models.DTO
{
    public class UserWarranty
    {
        public int WarrantyID { get; set; }
        public string Descriptin { get; set; }
        public string Title { get; set; }
        public string CompanyName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}