using System;
using System.Collections.Generic;
using System.Text;

namespace Dev_Broke.Domain.Entities
{
    public abstract class BaseEntity
    {
        public virtual int Id { get; protected set; }
    }
}
