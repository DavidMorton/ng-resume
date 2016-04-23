var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('resumeController', function($scope) {
	$scope.Name= "David Morton"; 
    $scope.Occupation= "Software Developer";
    $scope.Email= "david@isamorton.com";
    $scope.Phone= "713-422-3448";
    $scope.Profile = "I don't merely write code; I deliver solutions.\n\nI’m a passionate, insightful and effective software developer with over 10 years of creative problem-solving in C# and .NET. and a deep understanding of SOLID principles, dependency injection and TDD. ";

    $scope.Links=
        [{
            Name: "Email", 
            Address: "mailto://" + $scope.Email
        },
        {
            Name: "Git", 
            Address: "https://github.com/DavidMorton"
        }, 
        {
            Name: "LinkedIn", 
            Address: "https://www.linkedin.com/in/davidmmorton"
        }, 
        {
            Name: "StackOverflow", 
            Address: "http://stackoverflow.com/users/45916/david-morton?tab=profile"
        }
		];
    $scope.Skills = [
        { 
            Category: "Languages", 
            Values: ["C#", "Javascript", "HTML", "CSS", "XAML", "Objective-C", "F#"]
        }, 
        {
            Category: "Frameworks",
            Values: [".NET", "Jquery", "Node.js", "Entity Framework", "WPF", "WCF", "ASP.NET", "NUnit", "WinForms", "VSTO"]
        },
        {
            Category: "Databases", 
            Values: ["SQL Server", "Oracle, SQL Server Compact"]
        }, 
        {
            Category: "Techniques", 
            Values: ["SOLID", "TDD", "Dependency Injection", "Functional Programming", "MVC", "MVVM"]
        }, 
        {
            Category: "Environments", 
            Values: ["Visual Studio", "Xcode"]
        },
        {
            Category: "Other", 
            Values: ["Git", "ReSharper", "Debugging via decompiling"]
        }];
    $scope.Experience = 
        [ {
            Company: "JPMorgan Chase & Co.", 
            Title: "Associate Team Lead", 
            StartDate: "January 2015", 
            EndDate: "Present", 
            Achievements: [ "Responsible for the output of an agile team of five developers.",
				"Managed a VSTO application with a WPF UI, and a backend on Server 2013 with 19 WCF Services.",
				"Onboarded 27 independent components onto continuous integration and deployment.",
				"Reduced coupling between reusable assemblies, dividing them into independent NuGet packages.",
				"Linked automated TeamCity builds with a proprietary deployment system.",
				"Organized the team to be self-sustaining by introducing peer code reviewing requirements.", 
				"Developed small, high impact applications, deployed on over 17,000 desktops across the enterprise.",
				"Wrote Powershell scripts to standardize deployments."]
        }, 
        {
        	Company: "JPMorgan Chase & Co.", 
        	Title: "Associate Developer",
        	StartDate: "August 2013", 
        	EndDate: "January 2015", 
        	Achievements: ["Designed and implemented a greenfield VSTO application with a WPF UI with over 1500 unit tests.",
					"Designed a framework for 33 advanced PowerPoint charting types with custom formats.",
					"Defined and presented on the best practices for a proprietary deployment system.",
					"Worked heavily with, and developed a testable framework around COM Interop objects.",
					"Integrated the front-end application with WCF services providing data from a Mongo database.",
					"Led the team in story points completed, and number of lines of code written.",
					"Trained the team in dependency injection and Test Driven Development best practices.",
					"Worked in an Agile/SCRUM team using Atlasssian JIRA for issue management."]
        }, 
        {
        	Company: "LiquidFrameworks, LLC.", 
        	Title: "Senior Developer",
        	StartDate: "July 2010", 
        	EndDate: "August 2013", 
        	Achievements: ["Maintained and developed a disconnected WPF application using SQL Server Compact.",
					"Transitioned the flagship product from a site-installed product to a cloud-based product.",
					"Implemented several bits of functionality in SalesForce cloud.",
					"Developed integration layers for Quickbooks, MAS90, Peachtree, and GreatPlains.",
					"Implemented NHibernate, Castle Windsor and an object proxy system for the flagship app.",
					"Developed two tie-in iOS applications using Objective-C.",
					"Used ProtoBuf serialization to replace SQL Server replication, speeding up sync 500-fold.",
					"Designed and implemented, from the ground up, an entire survey tool, along with 145 unit tests."]
        }, 
        {
        	Company: "SolArc, Inc.", 
        	Title: "Senior Developer", 
        	StartDate: "March 2010", 
        	EndDate: "July 2010", 
        	Achievements: ["Designed and implemented a report editing component for RightAngle, a commodities trading software.",
					"Worked with a large-scale commodities trading platform written in WinForms and C#.",
					"Converted portions of a PowerBuilder application into C#.",
					"Designed a document editing system using Windows Workflow Foundation and DevExpress tools."]
        }, 
        {
        	Company: "Catapult Systems", 
        	Title: "Senior Consultant", 
        	StartDate: "August 2008", 
        	EndDate: "March 2010", 
        	Achievements: ["Designed, implemented and presented on an MVVM implementation in Silverlight 3.",
					"Helped Catapult Systems, a Microsoft NSI, become thought leaders in the community.",
					"Developed an ASP.NET MVC 2 application for an aviation insurance company.",
					"Refactored a data-driven ASP.NET project to conform to SOLID principles.",
					"Led various presentations on new technologies, including Jquery.",
					"Worked for the Houston Texans for a short period of time maintaining their internal applications."]
        }, 
        {
        	Company: "Catapult Systems", 
        	Title: "Consultant", 
        	StartDate: "August 2007", 
        	EndDate: "August 2008", 
        	Achievements: ["Helped design and develop an ASP.NET project at a major air services provider in Houston.",
					"Implemented JavaScript, Jquery and AJAX into ASP.NET when AJAX was brand new.",
					"Implemented a WinForms application for a Florida court system using CAB and Infragistics controls."]
        }, 
        {
        	Company: "Hyperactive Concepts", 
        	Title: "Freelance Developer", 
        	StartDate: "September 2006", 
        	EndDate: "June 2007", 
        	Achievements: ["Developed C#, ASP.NET and Javascript applications for clients.",
					"Completed an administrative back-end in T-SQL for a computer training company."]
        }, 
        {
        	Company: "Aaron Rents, Inc.", 
        	Title: "IT Applications Developer", 
        	StartDate: "August 2006", 
        	EndDate: "August 2007", 
        	Achievements: ["Integrated Lawson accounting system and Concur expense reporting system.",
					"Wrote an auto-dialer application with a user-friendly ASP.NET/Javascript UI.",
					"Learned C# and worked with CSLA business objects.",
					"Integrated accounting information between Made2Manage ERP and Lawson Accounting Software."]
        }, 
        {
        	Company: "Aaron Rents, Inc.", 
        	Title: "IT Field Support", 
        	StartDate: "September 2005", 
        	EndDate: "August 2006", 
        	Achievements: ["Re-imaged store servers and workstations using Norton Ghost.",
					"Configured servers and workstations with DNS, DHCP, WINS, etc.",
					"Automated my job by creating a VBA script.",
					"Automated the job of my coworkers by upgrading the VBA script to VB.NET.",
					"Took part in an ERP implementation, including translating data from the old data source to the new."]
        }, 
        {
        	Company: "Aaron Rents, Inc.", 
        	Title: "Acquisitions Auditor", 
        	StartDate: "September 2004", 
        	EndDate: "September 2005", 
        	Achievements: ["Led multiple acquisitions, converting data from the old POS system to the Aaron Rents POS system.",
					"Audited Aaron Rents store locations for compliance and risk management.",
					"Began efforts to automate portions of the process, including the creation of acquisitions documents."]
        }];

    $scope.AdditionalExperience = [{
        	Title: "Founder/Designer/Developer, Muxica; July 2012-July 2014",
        	Description: "Designed and developed an iPhone music app that was highly used in the visually impaired community."
        }, 
        {
        	Title: "Founder/President, Houston F# Users Group; April 2009-December 2009", 
        	Description: "Marketed and led the F# Users group in conjunction with the local Microsoft Developer Evangelist."
        }];

    $scope.Awards = [
    	"Microsoft MVP (C#) 2010-2011", 
    	"MCTS: .NET Framework 2.0 Web Applications"
    ];

    $scope.Education = "Texas A&M University - Bachelors degree in Psychology with a minor in Philosophy - 1997-2001";

    $scope.References = "Available upon request."

    $scope.About = "This resume was written in Jade and Angular.js with flourishes courtesy of Bootstrap.js, and continuously deployed to AWS via GitHub.  The layout, design and programming are mine.  This site is print-friendly for those of you who like paper.\n\n:)";

    $scope.AboutPrint = "This resume was not written in Word. It's a combination of HTML, Jade, Bootstrap.js, Angular.js and JQuery.\nIf you want the latest version, you can find it at http://resume.isamorton.com/. The site us auto-deployed to AWS via Github, running on Node.js and uses responsive CSS to format the document so it looks like what you're seeing right now. ";
});
















