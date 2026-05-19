"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, Modal, Surface, TextField , Select, ListBox, TextArea} from "@heroui/react";

export function EditModal({data}) {
    const handleSubmit = async (e) => {
    
    const formData = new FormData(e.target);
    const form = Object.fromEntries(formData.entries());
    
    const res = await fetch(`http://localhost:5000/tutors/${data._id}`,{method : "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form)
    })
    const result = await res.json();
    
  };
  return (
    <Modal>
      <Button>edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Tutor Detail</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit}  id="edit-form" className="p-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Tutor Name */}
                          <div className="md:col-span-2">
                            <TextField defaultValue={data.tutorName} name="tutorName" isRequired>
                              <Label>Tutor Name</Label>
                              <Input placeholder="John Doe" className="rounded-2xl" />
                              <FieldError />
                            </TextField>
                          </div>
                
                          {/* Area/city */}
                          <TextField defaultValue={data.location} name="location" isRequired>
                            <Label>Location</Label>
                            <Input placeholder="Dhaka" className="rounded-2xl" />
                            <FieldError />
                          </TextField>
                
                          {/* Subject - Updated Select Component */}
                          <div>
                            <Select
                            defaultValue={data.subject}
                              name="subject"
                              isRequired
                              className="w-full"
                              placeholder="Select category"
                            >
                              <Label>Subject</Label>
                              <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                              </Select.Trigger>
                              <Select.Popover>
                                <ListBox>
                                  <ListBox.Item id="Mathematics" textValue="Mathematics">
                                    Mathematics
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                  <ListBox.Item id="Physics" textValue="Physics">
                                    Physics
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                  <ListBox.Item id="Chemistry" textValue="Chemistry">
                                    Chemistry
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                  <ListBox.Item id="Biology" textValue="Biology">
                                    Biology
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                  <ListBox.Item id="Zoology" textValue="Zoology">
                                    Zoology
                                    <ListBox.ItemIndicator />
                                  </ListBox.Item>
                                </ListBox>
                              </Select.Popover>
                            </Select>
                          </div>
                
                          {/* Price */}
                          <TextField defaultValue={data.fee} name="fee" type="number" isRequired>
                            <Label>Hourly fee</Label>
                            <Input type="number" placeholder="5" className="rounded-2xl" />
                            <FieldError />
                          </TextField>
                
                          {/* Duration */}
                          <TextField defaultValue={data.totalSlot} name="totalSlot" isRequired>
                            <Label>Total Slot</Label>
                            <Input placeholder="10" className="rounded-2xl" />
                            <FieldError />
                          </TextField>
                
                          {/* Departure Date */}
                          <div className="md:col-span-2">
                            <TextField defaultValue={data.sessionStartDate} name="sessionStartDate" type="date" isRequired>
                              <Label>Session Start Date</Label>
                              <Input type="date" className="rounded-2xl" />
                              <FieldError />
                            </TextField>
                          </div>
                          <div className="flex gap-4">
                            {/* Start Time */}
                            <div className="flex w-full flex-col gap-2">
                              <label htmlFor="start-time" className="text-sm font-medium">
                                Start Time
                              </label>
                
                              <input
                              defaultValue={data.startTime} 
                                type="time"
                                id="start-time"
                                name="startTime"
                                required
                                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                
                            {/* End Time */}
                            <div className="flex w-full flex-col gap-2">
                              <label htmlFor="end-time" className="text-sm font-medium">
                                End Time
                              </label>
                
                              <input defaultValue={data.endTime} 
                                type="time"
                                id="end-time"
                                name="endTime"
                                required
                                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                              />
                
                              <p className="text-sm text-gray-500">Required field</p>
                            </div>
                          </div>
                
                          {/* Image URL - Removed preview */}
                          <div className="md:col-span-2">
                            <TextField  defaultValue={data.imageUrl}  name="imageUrl" isRequired>
                              <Label>Image URL</Label>
                              <Input
                             
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                              />
                              <FieldError />
                            </TextField>
                          </div>
                
                          {/* Description */}
                          <div className="md:col-span-2">
                            <TextField defaultValue={data.institutionExperience} name="institutionExperience" isRequired>
                              <Label>Institution & Experience</Label>
                              <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                              />
                              <FieldError />
                            </TextField>
                          </div>
                        </div>
                
                        
                      </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" form="edit-form" slot="close">Edit</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}