using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManagement.UI.Models;

namespace TaskManagement.UI.Services
{
    public interface ITaskService
    {
        Task<TaskInfo[]> GetAll();
        Task<TaskInfo> Get(int TaskId);
        Task Add(TaskInfo Task);
        Task Update(TaskInfo Task);
        Task Delete(int TaskId);
    }
}
