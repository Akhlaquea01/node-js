const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

describe("Tests for courses controller", () => {

    describe("Tests for getAllCourses", () => {
        it("Shuould return all courses", () => {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            
            coursesModel.find.mockReturnValue(mockCourses);
            const results = coursesController.getAllCourse();

            expect(coursesModel.find).toHaveBeenCalledTimes(1);              
            expect(results).toBe(mockCourses);
        })
    })
    
    
    describe("Tests for getACourses", () => {
        it("Should return a course if found", () => {
            const mockCourse = { _id: "1", name: "Course 1" };

            coursesModel.findById = jest.fn().mockImplementation((id) => {
                return id === 3 ? mockCourse : null;
            });
            
            const result = coursesController.getACourse("3");

            expect(result).toBe(mockCourse);
            expect(coursesModel.findById).toHaveBeenCalledWith(3);
        })  
        
        it("Should throw an error if course is not found", () => {
            coursesModel.findById = jest.fn().mockImplementation((id) =>  {
                throw new Error("Course not found")
            });

            // const result = coursesController.getACourse("3");

            expect(() => coursesController.getACourse(1000)).toThrow("Course not found");
            expect(coursesModel.findById).toHaveBeenCalledTimes(1);
        })
    })


    describe("Tests for createACourse", () => {
        const mockCourse = { name: "New Course" };
        const savedCourse = { _id: "3", ...mockCourse };
        const returnedCourse = {...savedCourse};
        
        coursesModel.create.mockReturnValue(savedCourse);
        
        const result =  coursesController.createACourse(mockCourse);
        // toBe is to compare premitive and toEqual to compare reference types
        // expect(result).toBe(returnedCourse);

        expect(result).toEqual(returnedCourse);


        expect(coursesModel.create).toHaveBeenCalledWith(mockCourse);
    })

})




