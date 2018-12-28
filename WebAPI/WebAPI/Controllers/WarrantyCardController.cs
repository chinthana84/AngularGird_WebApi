using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models.DTO;

namespace WebAPI.Controllers
{
    public class WarrantyCardController : ApiController
    {

        [Route("api/AngularDTQuery")]
        [AllowAnonymous]
        [HttpPost]
        public IHttpActionResult AngularDTQuery(SearchObject searchObject)
        {

            UsersEntities db = new UsersEntities();

            if (searchObject.girdId == 1) //Warannty
            {
                IQueryable<Warranty> a = db.Warranties.AsQueryable();
                var xx = new DbQueryReturn<Warranty>().XXXXXXXXXXXXXX(a, searchObject);
                return Ok(xx.Content);
            }
            else if (searchObject.girdId == 2)  //User list
            {
                IQueryable<Test> a = db.Tests.AsQueryable();
                var xx = new DbQueryReturn<Test>().XXXXXXXXXXXXXX(a, searchObject);
                return Ok(xx.Content);
            }
            else
            {
                return new DbQueryReturn<Test>().XXXXXXXXXXXXXX(null, searchObject);
            }
        }


  
       
    }

    [AllowAnonymous]
    public class DbQueryReturn<T> : ApiController
    {
        
        public dynamic XXXXXXXXXXXXXX(IQueryable<T> query, SearchObject searchObject)
        {
            decimal pageSize = 10.0M;
            int totalPages;

            if (searchObject.searchColName == null)
            {
                searchObject.searchColName = "";
            }

            if (searchObject.searchText == null)
            {
                searchObject.searchText = ""; searchObject.searchColName = "";
            }


            if (searchObject.searchColName.Length > 0)
            {
                var lam = GetExpression<T>(searchObject.searchColName, searchObject.searchText);

                totalPages = (int)Math.Ceiling((double)(query.AsQueryable().Where(lam).Count() / pageSize));
            }
            else
            {
                totalPages = (int)Math.Ceiling((double)(query.Count() / pageSize));
            }


            if (searchObject.pageNo < 1)
            {
                searchObject.pageNo = 1;
            }
            else if (searchObject.pageNo > totalPages)
            {
                searchObject.pageNo = totalPages;
            }
            int startPage, endPage;
            if (totalPages <= 10)
            {
                startPage = 1;
                endPage = totalPages;
            }
            else
            {
                if (searchObject.pageNo <= 6)
                {
                    startPage = 1;
                    endPage = 10;
                }
                else if (searchObject.pageNo + 4 >= totalPages)
                {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else
                {
                    startPage = searchObject.pageNo - 5;
                    endPage = searchObject.pageNo + 4;
                }
            }

            int totalItems = query.Count();
            int startIndex = (searchObject.pageNo - 1) * (int)pageSize;
            int endIndex = Math.Min(startIndex + (int)pageSize - 1, totalItems - 1);
            var pages = query.Take((endPage + 1) - startPage);

            int c = (endPage + 1) - startPage;

            List<int> a = new List<int>();

            for (int i = 0; i < c; i++)
            {
                a.Add(startPage + i);
            }

            if (searchObject.searchColName.Length > 0)
            {
                var lam = GetExpression<T>(searchObject.searchColName, searchObject.searchText);

                var param = searchObject.searchColName;
                var propertyInfo = typeof(T).GetProperty(searchObject.defaultSortColumnName);
                var queryResultPage = query.AsQueryable().Where(lam).ToList().OrderBy(x => propertyInfo.GetValue(x, null)).Skip((int)pageSize * (searchObject.pageNo - 1))
                  .Take((int)pageSize).ToList();


                return Ok(new
                {
                    totalItems = totalItems,
                    currentPage = searchObject.pageNo,
                    pageSize = pageSize,
                    totalPages = totalPages,
                    startPage = startPage,
                    endPage = endPage,
                    startIndex = startIndex,
                    endIndex = endIndex,
                    pagedItems = queryResultPage.ToList(),
                    pages = a

                });
            }
            else
            {
                var param = searchObject.searchColName;
                    var propertyInfo = typeof(T).GetProperty(searchObject.defaultSortColumnName);
                    var queryResultPage = query.ToList().OrderBy(x => propertyInfo.GetValue(x, null)).Skip((int)pageSize * (searchObject.pageNo - 1))
                      .Take((int)pageSize).ToList();

            //var queryResultPage = query.OrderBy("")
            //  .Skip((int)pageSize * (searchObject.pageNo - 1))
            //  .Take((int)pageSize);



            return Ok(new
            {
                totalItems = totalItems,
                currentPage = searchObject.pageNo,
                pageSize = pageSize,
                totalPages = totalPages,
                startPage = startPage,
                endPage = endPage,
                startIndex = startIndex,
                endIndex = endIndex,
                pagedItems = queryResultPage.ToList(),
                pages = a

            });

             }


        }

     

        static Expression<Func<T, bool>> GetExpression<T>(string propertyName, string propertyValue)
        {
            var parameterExp = Expression.Parameter(typeof(T), "type");
            var propertyExp = Expression.Property(parameterExp, propertyName);
            MethodInfo method = typeof(string).GetMethod("Contains", new[] { typeof(string) });
            var someValue = Expression.Constant(propertyValue, typeof(string));
            var containsMethodExp = Expression.Call(propertyExp, method, someValue);

            return Expression.Lambda<Func<T, bool>>(containsMethodExp, parameterExp);
        }
   }
     

    public class SearchObject
    {
        public string searchColName { get; set; }
        public string searchText { get; set; }
        public int pageNo { get; set; }
        public int girdId { get; set; }
        public string defaultSortColumnName { get; set; }

    }
}

//[Route("api/GetAllWarranties")]
//[AllowAnonymous]
//[HttpPost]
////public IHttpActionResult GetAllWarranties(int currentPage=1,string searchColumn="",string searchText="")
//public IHttpActionResult GetAllWarranties(SearchObject searchObject)
//{

//    if (searchObject.searchColName == null)
//    {
//        searchObject.searchColName = "";
//    }

//    if (searchObject.searchText == null)
//    {
//        searchObject.searchText = ""; searchObject.searchColName = "";
//    }

//    decimal pageSize = 10.0M;

//    List<UserWarranty> lst = new List<UserWarranty>();
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 100,
//        CompanyName = "ABC pvtt",
//        Descriptin = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//        " repudiandae corporis delectus iusto ullam, excepturi est fugit ea voluptatem assumenda reprehenderit. Atque!",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"


//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 101,
//        CompanyName = "ABC pvtt",
//        Descriptin = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus quis molestias necessitatibus" +
//        " repudiandae corporis delectus iusto ullam, excepturi est fugit ea voluptatem assumenda reprehenderit. Atque!",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 102,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 103,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 105,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 106,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 107,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 108,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 109,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 110,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 111,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 100,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"


//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 102,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 103,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 104,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 105,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf Lorem",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 106,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 107,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 108,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 109,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 110,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 111,
//        CompanyName = "ABC pvtt",
//        Descriptin = "asdfasdf Lorem ",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });
//    lst.Add(new UserWarranty()
//    {
//        WarrantyID = 111,
//        CompanyName = "ABC pvtt",
//        Descriptin = "chinthana ",
//        StartDate = DateTime.Now,
//        EndDate = DateTime.Now,
//        Title = "someting"

//    });

//    int j = 1;
//    foreach (var item in lst)
//    {
//        item.WarrantyID = j;
//        j++;
//    }


//    int totalPages;

//    if (searchObject.searchColName.Length > 0)
//    {
//        var lam = GetExpression<UserWarranty>(searchObject.searchColName, searchObject.searchText);

//        totalPages = (int)Math.Ceiling((double)(lst.AsQueryable().Where(lam).Count() / pageSize));
//    }
//    else
//    {
//        totalPages = (int)Math.Ceiling((double)(lst.Count() / pageSize));
//    }


//    if (searchObject.pageNo < 1)
//    {
//        searchObject.pageNo = 1;
//    }
//    else if (searchObject.pageNo > totalPages)
//    {
//        searchObject.pageNo = totalPages;
//    }
//    int startPage, endPage;
//    if (totalPages <= 10)
//    {
//        startPage = 1;
//        endPage = totalPages;
//    }
//    else
//    {
//        if (searchObject.pageNo <= 6)
//        {
//            startPage = 1;
//            endPage = 10;
//        }
//        else if (searchObject.pageNo + 4 >= totalPages)
//        {
//            startPage = totalPages - 9;
//            endPage = totalPages;
//        }
//        else
//        {
//            startPage = searchObject.pageNo - 5;
//            endPage = searchObject.pageNo + 4;
//        }
//    }

//    int totalItems = lst.Count();
//    int startIndex = (searchObject.pageNo - 1) * (int)pageSize;
//    int endIndex = Math.Min(startIndex + (int)pageSize - 1, totalItems - 1);
//    var pages = lst.Take((endPage + 1) - startPage);

//    int c = (endPage + 1) - startPage;

//    List<int> a = new List<int>();

//    for (int i = 0; i < c; i++)
//    {
//        a.Add(startPage + i);
//    }

//    if (searchObject.searchColName.Length > 0)
//    {
//        var lam = GetExpression<UserWarranty>(searchObject.searchColName, searchObject.searchText);

//        var queryResultPage = lst.AsQueryable().Where(lam).Skip((int)pageSize * (searchObject.pageNo - 1))
//                                  .Take((int)pageSize);


//        return Ok(new
//        {
//            totalItems = totalItems,
//            currentPage = searchObject.pageNo,
//            pageSize = pageSize,
//            totalPages = totalPages,
//            startPage = startPage,
//            endPage = endPage,
//            startIndex = startIndex,
//            endIndex = endIndex,
//            pagedItems = queryResultPage,
//            pages = a

//        });
//    }
//    else
//    {
//        var queryResultPage = lst
//          .Skip((int)pageSize * (searchObject.pageNo - 1))
//          .Take((int)pageSize);


//        return Ok(new
//        {
//            totalItems = totalItems,
//            currentPage = searchObject.pageNo,
//            pageSize = pageSize,
//            totalPages = totalPages,
//            startPage = startPage,
//            endPage = endPage,
//            startIndex = startIndex,
//            endIndex = endIndex,
//            pagedItems = queryResultPage,
//            pages = a

//        });
//    }


//}

