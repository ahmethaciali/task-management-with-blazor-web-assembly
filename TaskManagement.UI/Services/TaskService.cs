using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using TaskManagement.UI.Models;
using System.Net.Http.Json;
using Microsoft.JSInterop;

namespace TaskManagement.UI.Services
{
    public class TaskService : ITaskService
    {
        private readonly string baseurl = "http://localhost:8081/api/tasks/";

        private HttpClient _httpClient;
        public TaskService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task Add(TaskInfo Task)
        {
            await _httpClient.PostAsJsonAsync(baseurl, Task);
        }

        public async Task Delete(int TaskId)
        {
            await _httpClient.DeleteAsync(baseurl + TaskId);
        }

        public Task<TaskInfo> Get(int TaskId)
        {
            return _httpClient.GetFromJsonAsync<TaskInfo>(baseurl + TaskId);
        }

        public Task<TaskInfo[]> GetAll()
        {
            return _httpClient.GetFromJsonAsync<TaskInfo[]>(baseurl);
        }

        public async Task Update(TaskInfo Task)
        {
            await _httpClient.PutAsJsonAsync(baseurl + Task.Id, Task);
        }
    }
}
