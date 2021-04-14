using System;
using System.Collections.Generic;
using System.Text;

namespace Dev_Broke.Domain.Entities.AggregatesModel.CompanyAggregate
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public string ImgURL { get; set; }
    }
}
