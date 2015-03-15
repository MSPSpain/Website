using System;
using System.Diagnostics;
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
        private static readonly string SCHEMAS_PATH = "Schema";

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
                string schemaFilePath = Path.Combine(SCHEMAS_PATH, Path.GetFileNameWithoutExtension(file) + ".schema.json");
                Assert.IsTrue(File.Exists(schemaFilePath), "There is no test for file: " + file);
                Debug.Write("Testing file: " + Path.GetFileName(file));
                TestJsonFile(schemaFilePath, file);
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
    }
}
