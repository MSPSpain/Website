using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
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
using System.Drawing;
using System.Net;
#endif

namespace MSPSpain.Tests
{
    /// <summary>
    /// Holds tests relevant to the MSPSpain.Web
    /// At this very moment, it's only being used to validate the format of the JSON files.
    /// 
    /// Shall you CHANGE something HERE, please build this project in DebugNuint and PUSH THE DLL!!!
    /// </summary>
    [TestClass]
    public class Frontend
    {
        /// <summary>
        /// Path in which the Json files are stored
        /// </summary>
        private static readonly string JSONS_PATH = "../../../MSPSpain.Web/Content/FakeJSON/";

        /// <summary>
        /// Path in which the schema files are stored
        /// </summary>
        private static readonly string SCHEMAS_PATH = "Schema/";

        /// <summary>
        /// Tests all Json files under JSONS_PATH with the schemas under SCHEMAS_PATH.
        /// All Json files MUST have an schema!
        /// </summary>
        [TestMethod]
        public void TestJsonFiles()
        {
            var jsonFiles = Directory.GetFiles(JSONS_PATH, "*.json");
            foreach (var file in jsonFiles)
            {
                Assert.IsTrue(File.Exists(SCHEMAS_PATH + Path.GetFileNameWithoutExtension(file) + ".schema.json"), "There is no test for file: " + file);
                Debug.Write("Testing file: " + Path.GetFileName(file));
                TestJsonFile(@"Schema\" + Path.GetFileNameWithoutExtension(file) + ".schema.json", file);
                Debug.Write("Ok!");
            }
        }

        /// <summary>
        /// Tests the given schema against an specific Json file
        /// </summary>
        /// <param name="schemaPath">Path to the schema to be used</param>
        /// <param name="jsonPath">Path to the Json file to be tested</param>
        private void TestJsonFile(string schemaPath, string jsonPath)
        {
            JsonSchema schema = JsonSchema.Parse(File.ReadAllText(schemaPath));
            Assert.IsTrue(JArray.Parse(File.ReadAllText(jsonPath)).IsValid(schema), "Schema invalid for file: " + jsonPath);
        }

        /// <summary>
        /// Checks if the images being used by the MSPs exist, are accessible and are perfect squares
        /// </summary>
        [TestMethod]
        public void ValidateImageSize()
        {
            var result = JArray.Parse(File.ReadAllText(JSONS_PATH + "Msp.json")).Select(x => new { Thumbnail = x["thumbnail"].ToString(), Image = x["image"].ToString(), Name = x["name"] + " " + x["lastname"] });
            foreach (var msp in result)
            {
                Assert.IsTrue(CheckSquareImage(msp.Thumbnail), "Thumbnail for " + msp.Name + " is not valid!");
                Assert.IsTrue(CheckSquareImage(msp.Image), "Image for " + msp.Name + " is not valid!");
            }
        }

        /// <summary>
        /// Checks if a remote image is a square
        /// </summary>
        /// <param name="url">URL to the remote image</param>
        /// <returns>True if it is an square. False if it isn't or if it can't be accessed</returns>
        private bool CheckSquareImage(string url)
        {
            try
            {
                var image = Image.FromStream((WebRequest.Create(url)).GetResponse().GetResponseStream());
                return image.Height == image.Width;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
