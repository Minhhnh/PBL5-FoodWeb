using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodWeb.API.Database.Entities;
using FoodWeb.API.DTOs;

namespace FoodWeb.API.Database.IRepositories
{
    public interface IFoodRepository
    {
        public IEnumerable<FoodDTO> GetAllFoodsByIdSeller(int Id);

        //public IEnumerable<FoodDTO> GetAllFoods();

        public IEnumerable<FoodDTO> GetAllFoodsPaging(int numberPage);

        public FoodDTO GetFoodById(int Id);

        //public IEnumerable<FoodDTO> GetAllFoodsBySearch(SearchDTO searchDTO);

        public double PriceFoods(List<InfoFoodOrderDTO> ListInfoFood);

        public IEnumerable<FoodDTO> GetAllFoodsBySearchPaging(int numberPage, SearchDTO searchDTO);
    }
}