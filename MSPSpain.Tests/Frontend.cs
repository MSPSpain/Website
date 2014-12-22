using System;
using System.IO;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json.Linq;

#if NUNIT
using TestClass = NUnit.Framework.TestFixtureAttribute;
using TestMethod = NUnit.Framework.TestAttribute;
using TestCleanup = NUnit.Framework.TearDownAttribute;
using TestInitialize = NUnit.Framework.SetUpAttribute;
using ClassCleanup = NUnit.Framework.TestFixtureTearDownAttribute;
using ClassInitialize = NUnit.Framework.TestFixtureSetUpAttribute;
using Assert = NUnit.Framework.Assert;
#else
using Microsoft.VisualStudio.TestTools.UnitTesting;
#endif

// Remember if you do any change here, build this project in DebugNuint and push dll

namespace MSPSpain.Tests
{
    [TestClass]
    public class Frontend
    {
        string path = "../../../MSPSpain.Web/Content/FakeJSON/";

        [TestMethod]
        public void MspJson()
        {
            JsonSchema schema = JsonSchema.Parse(@"{
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'id': {'type':'number'},
                        'msp': {'type':'boolean'},
                        'name': {'type':'string'},
                        'lastname': {'type':'string'},
                        'years': {'type':'array'},
                        'city': {'type':'string'},
                        'university': {'type':'string'},
                        'email': {'type':'string'},
                        'skills': {'type':'string'},
                        'twitter': {'type':'string'},
                        'linkedin': {'type':'string'},
                        'image': {'type':'string'},
                        'thumbnail': {'type':'string'},
                        'location': {'type':'object'}
                    }
                }
            }");

            string json = File.ReadAllText(path + "MspJSON.txt");
            JArray person = JArray.Parse(json);

            bool valid = person.IsValid(schema);
            Assert.IsTrue(valid);

        }

        [TestMethod]
        public void QuotesJson()
        {
            JsonSchema schema = JsonSchema.Parse(@"{
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'id': {'type':'number'},
                        'quote': {'type':'string'}
                    }
                }
            }");

            string json = File.ReadAllText(path + "QuotesJSON.txt");
            JArray person = JArray.Parse(json);

            bool valid = person.IsValid(schema);
            Assert.IsTrue(valid);

        }
    }
}
