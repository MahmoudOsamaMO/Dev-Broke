using System;
using System.Collections.Generic;
using System.Text;

namespace Dev_Broke.Domain.Entities.AggregatesModel.CompanyAggregate
{
    public class Company : BaseEntity
    {
        public Address CompanyAddress { get; private set; }


        // DDD Patterns comment
        // Using a private collection field, better for DDD Aggregate's encapsulation
        // so Employees cannot be added from "outside the AggregateRoot" directly to the collection,
        // but only through the method Order.AddOrderItem() which includes behavior.
        private readonly List<Employee> _employees = new List<Employee>();

        // Using List<>.AsReadOnly() 
        // This will create a read only wrapper around the private list so is protected against "external updates".
        // It's much cheaper than .ToList() because it will not have to copy all items in a new collection. (Just one heap alloc for the wrapper instance)
        //https://msdn.microsoft.com/en-us/library/e78dcd75(v=vs.110).aspx 
        public IReadOnlyCollection<Employee> Employees => _employees.AsReadOnly();
    }
}
